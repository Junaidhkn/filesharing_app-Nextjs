'use client';

import '@uploadthing/react/styles.css';

import { UploadButton } from '../../lib/uploadthing';

export default function Upload() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<UploadButton
				endpoint='imageUploader'
				onClientUploadComplete={(res) => {
					console.log('Files: ', res);
				}}
				onUploadError={(error: Error) => {
					// Do something with the error.
					alert(`ERROR! ${error.message}`);
				}}
			/>
		</main>
	);
}
