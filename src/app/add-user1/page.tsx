import { StepOneForm } from '../../Components/form/StepOneForm';
import Steper from '@/src/Components/Users/Steper';

const StepOne = () => {


    return (
        <>
            <main className="h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-0  px-10 py-5 min-h-screen">
                <Steper formId="stepOneForm" />
                <StepOneForm

                />
            </main>
        </>
    );
}

export default StepOne;
