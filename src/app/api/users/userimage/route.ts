import mongoose, { Schema, Document } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

// Define the interface for the UserImageCount document
interface IUserImageCount extends Document {
  userId: string;
  generatedImages: number;
}

// Define the schema for the UserImageCount collection
const UserImageCountSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  generatedImages: { type: Number, required: true, default: 0 },
});

// Define the UserImageCount model
const UserImageCount = mongoose.models.UserImageCount || mongoose.model<IUserImageCount>('UserImageCount', UserImageCountSchema);

// Define an async function to retrieve user image count by user ID
async function getUserImageCount(userId: string): Promise<IUserImageCount | null> {
  try {
    // Query the UserImageCount model by user ID
    const userImageCount = await UserImageCount.findOne({ userId });
    return userImageCount;
  } catch (error) {
    console.error('Error fetching user image count:', error);
    return null;
  }
}

// Define the GET handler
export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const userImageCount = await getUserImageCount(userId);

    if (!userImageCount) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      imageLimit: 1, // or however you define the limit
      generatedImages: userImageCount.generatedImages,
    });
  } catch (error) {
    console.error('Error fetching user image count:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}