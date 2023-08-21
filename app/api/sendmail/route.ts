import { sendEmail } from '@/lib/sendEmail';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: Response) => {
	const data = await req.json();

	const { emailFrom, emailTo, description, fileURL, subject, fileName } = data;

	try {
		sendEmail({ description, emailFrom, emailTo, fileURL, subject, fileName });
		return NextResponse.json({ data });
	} catch (error) {
		return NextResponse.json({
			error: 'Something Went wrong! Please try again!',
		});
	}

	// return NextResponse.json({ data });
};
