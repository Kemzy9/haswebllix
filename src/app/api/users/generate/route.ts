import Replicate from 'replicate';
import { NextResponse } from 'next/server';
import { UserImageCount } from '@/models/userimage/route'; // Import from the correct model file
import { connect } from '@/dbConfig/dbConfig';

const MAX_IMAGES_PER_USER = 50;

connect();

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { userId, prompt } = body;

    // Fetch the user's image count from the database
    let userImageCount = await UserImageCount.findOne({ userId });

    if (userImageCount && userImageCount.generatedImages >= MAX_IMAGES_PER_USER) {
      return NextResponse.json({
        error: 'Image generation limit reached. You cannot generate more images.'
      }, { status: 403 });
    }

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN as string,
    });

    const input = {
      prompt: prompt,
      num_outputs: 1,
      aspect_ratio: '9:21',
      output_format: 'webp',
      output_quality: 100,
    };

    const output = await replicate.run(
      'black-forest-labs/flux-schnell',
      { input }
    ) as string[];

    const generatedImages = output.map((url) => ({ url, aspect_ratio: input.aspect_ratio }));

    // Update or create the user's image count in the database
    if (userImageCount) {
      userImageCount.generatedImages += 1; // Increment count
      await userImageCount.save();
    } else {
      userImageCount = new UserImageCount({ userId, generatedImages: 1 });
      await userImageCount.save();
    }

    return NextResponse.json({ images: generatedImages });
  } catch (error: any) {
    console.error('Error generating images:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ error: 'Image generation failed. Please try again later.' }, { status: 500 });
  }
}