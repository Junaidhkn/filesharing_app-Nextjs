'use client';

import '@uploadthing/react/styles.css';

import { UploadButton } from '../../lib/uploadthing';
import { useRef, useState } from 'react';

const MainUpload = () => {
	const [fileName, setFileName] = useState<string>('');
	const [fileUrl, setFileUrl] = useState<string>('');
	// const [disabled, setDisabled] = useState<boolean>(true);

	const emailTo = useRef<HTMLInputElement>(null);
	const emailFrom = useRef<HTMLInputElement>(null);
	const subject = useRef<HTMLInputElement>(null);
	const description = useRef<HTMLTextAreaElement>(null);

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

		const emailToValue: string | undefined = emailTo.current?.value;
		const emailFromValue: string | undefined = emailFrom.current?.value;
		const subjectValue: string | undefined = subject.current?.value;
		const descriptionValue: string | undefined = description.current?.value;

		if (
			emailToValue &&
			emailFromValue &&
			subjectValue &&
			descriptionValue &&
			fileUrl &&
			fileName
		) {
			const data = {
				emailTo: emailToValue,
				emailFrom: emailFromValue,
				subject: subjectValue,
				description: descriptionValue,
				fileUrl: fileUrl,
				fileName: fileName,
			};

			fetch('/api/sendmail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then((res) => res.json())
				.then((data) => {
					// Todo
				})
				.catch((err) => {
					console.log('Erorrerererererdsfsdfsdf', err);
				});
		}
	};

	return (
		<div className='p-9 w-[65vw] overflow-y-scroll  h-full'>
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
								// setDisabled(false);
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
								ref={emailTo}
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
								ref={emailFrom}
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
								ref={subject}
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
								ref={description}
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
