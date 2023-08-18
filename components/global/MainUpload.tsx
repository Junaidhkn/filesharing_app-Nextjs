'use client';

import React, { useState } from 'react';
import Upload from './Upload';

const MainUpload = () => {
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [size, setsize] = useState();
	const [show, setShow] = useState(false);
	const [emailto, setEmailTo] = useState('');
	const [emailfrom, setEmailFrom] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [data, setData] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className='flex justify-between items-center'>
			<div className='border border-black basis-[20%]'>
				<Upload />
			</div>
			<div className=''>
				<form
					// onSubmit=''
					method='post'>
					<div className=''>
						<input
							className=''
							type='email'
							name='emailto'
							id='emailto'
							// value={emailto}
							onChange={(e) => {
								setEmailTo(e.target.value);
							}}
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
							value={emailfrom}
							onChange={(e) => {
								setEmailFrom(e.target.value);
							}}
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
							value={title}
							onChange={(e) => {
								setTitle(e.target.value);
							}}
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
							name='description'
							id='description'
							value={description}
							onChange={(e) => {
								setDescription(e.target.value);
							}}
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
	);
};

export default MainUpload;
