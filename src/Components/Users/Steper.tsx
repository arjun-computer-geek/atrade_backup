import { Button } from 'flowbite-react';
import Link from 'next/link';

function Steper({ formId }: any) {
    return <div className='flex items-center w-full mb-4 sm:mb-5 space-x-4'>
        <Link href='users-list'>
            <Button color="gray" >
                <div className="flex items-center gap-x-3">
                    <span>Previous</span>
                </div>
            </Button>
        </Link>
        <ol className="flex items-center w-full">
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0 dark:text-white">
                    <span>1</span>
                </div>
            </li>
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0 dark:text-white">
                    <span>2</span>
                </div>
            </li>
            <li className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0 dark:text-white">
                    <span>3</span>
                </div>
            </li>
        </ol>
        <Button type='submit' form={formId}>
            <div className="flex items-center gap-x-3">
                Next
            </div>
        </Button>
    </div>
}
export default Steper