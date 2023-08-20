'use client';

const MainUpload = () => {
	return (
		<div className='p-9 w-[650px] h-full border border-black'>
			<div className='flex gap-7'>
				<div className='input basis-[40%]'>
					<form
						method='post'
						encType='multipart/form-data'>
						<input
							id='file'
							type='file'
							name='file'
							accept='*/*'
							className='custom-uploader'
						/>
					</form>
				</div>
				<div className='h-[350px] w-[0.5px] bg-slate-800'></div>
				<div className='form-container basis-[70%] font-bold text-white'>
					<form method='post'>
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
								name='title'
								id='title'
								required
							/>
							<label
								className='textField-label'
								htmlFor='title'>
								Title :
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
								Transfer
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default MainUpload;
