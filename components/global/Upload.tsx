import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Upload = () => {
	return (
		<main className='h-[400px] bg-slate-400/80'>
			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<Label htmlFor='picture'>File</Label>
				<Input
					id='picture'
					type='file'
				/>
			</div>
			<form></form>
		</main>
	);
};

export default Upload;
