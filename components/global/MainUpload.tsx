'use client';

import '@uploadthing/react/styles.css';

import { UploadButton } from '../../lib/uploadthing';
import { useRef, useState } from 'react';

const MainUpload = () => {
	const [fileName, setFileName] = useState<string>('');
	const [fileUrl, setFileUrl] = useState<string>('');
	const [disabled, setDisabled] = useState<boolean>(true);

	const emailTo = useRef('');
	const emailFrom = useRef('');
	const subject = useRef('');
	const description = useRef('');

	const copyHandler = () => {
		var copyText = document.getElementById(
			'myInput',
		) as HTMLInputElement | null;
		copyText?.select();
		copyText?.setSelectionRange(0, 99999); /* For mobile devices */
		if (copyText) {
			navigator.clipboard.writeText(copyText.value);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className='p-9 w-[65vw] h-full'>
			<div className='flex gap-7'>
				<div className='input basis-[40%]'>
					<div className='flex flex-col items-center justify-between p-24'>
						<UploadButton
							endpoint='imageUploader'
							onClientUploadComplete={(res) => {
								if (res) {
									setFileName(res[0].fileKey.split('_')[1]);
									setFileUrl(res[0].fileUrl);
								}
								setDisabled(false);
							}}
							onUploadError={(error: Error) => {
								// Do something with the error.
								alert(`ERROR! ${error.message}`);
							}}
						/>
						{fileName && (
							<p className='font-bold m-3 stroke-emerald-300'>{fileName}</p>
						)}
					</div>
				</div>
				<div className='h-[350px] w-[0.5px] bg-slate-800'></div>
				<div className='form-container basis-[70%] font-bold text-white'>
					<form
						method='post'
						onSubmit={handleSubmit}>
						<div className='input-imp'>
							<input
								className='textField-input'
								type='email'
								name='emailto'
								id='emailto'
								required
							/>
							<label
								className='textField-label'
								htmlFor='emailto'>
								Email to :
							</label>
						</div>
						<div className='input-imp'>
							<input
								className='textField-input'
								type='email'
								name='emailfrom'
								id='emailfrom'
								required
							/>
							<label
								className='textField-label'
								htmlFor='emailfrom'>
								Your Email :
							</label>
						</div>
						<div className='input-imp'>
							<input
								className='textField-input'
								type='text'
								name='Subject'
								id='Subject'
								required
							/>
							<label
								className='textField-label'
								htmlFor='Subject'>
								Subject :
							</label>
						</div>
						<div className='input-imp'>
							<textarea
								className='textField-input'
								typeof='text'
								name='description'
								id='description'
								required></textarea>
							<label
								className='textField-label'
								htmlFor='description'>
								Message :
							</label>
						</div>
						<div className='action-trigger'>
							<button
								type='submit'
								className='action-button'>
								Transfer via Email
							</button>
						</div>
					</form>
				</div>
			</div>
			{fileUrl && (
				<div className='flex flex-col justify-center items-center'>
					<input
						type='text'
						value={fileUrl ? fileUrl : ''}
						id='myInput'
						className='read-form-control'
						placeholder='Download Link'
						readOnly
					/>
					<button
						className='text-center  px-6 py-3 font-bold text-white bg-slate-800 rounded-2xl'
						onClick={copyHandler}>
						CopyLink
					</button>
				</div>
			)}
		</div>
	);
};

export default MainUpload;
