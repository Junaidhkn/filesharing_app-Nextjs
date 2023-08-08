'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import '@uploadthing/react/styles.css';

import { UploadButton } from '../../lib/uploadthing';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<UploadButton
				endpoint='imageUploader'
				onClientUploadComplete={(res) => {
					// Do something with the response
					console.log('Files: ', res);
					alert('Upload Completed');
				}}
				onUploadError={(error: Error) => {
					// Do something with the error.
					alert(`ERROR! ${error.message}`);
				}}
			/>
		</main>
	);
}

// const Upload = () => {
// 	return (
// 		<main className='h-[400px] bg-slate-400/80'>
// 			<div className='grid w-full max-w-sm items-center gap-1.5'>
// 				<Label htmlFor='picture'>File</Label>
// 				<Input
// 					id='picture'
// 					type='file'
// 				/>
// 			</div>
// 			<form></form>
// 		</main>
// 	);
// };

// export default Upload;
