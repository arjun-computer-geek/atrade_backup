import stepForm2ValidationSchema from '@/src/formValidation/stepform/stepForm2Validation';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { Dispatch, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
// import { getMasterData, getUserTypeData } from '../../utils/addUser/getMasterData'
import Select from 'react-select';

const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        boxShadow: 'none', // Remove focus color
    }),
};
export const StepTwoForm = (props: { setStepTwoFormData: Dispatch<any>, stepTwoError: any }) => {
    // const { setStepTwoFormData, stepTwoError, } = props
    // const [masterData, setMasterData] = useState<any>({})
    // const [userTypeData, setUserTypeData] = useState<any>([])
    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem('registeredUser') || 'null')
    //     setStepTwoFormData((prev: any) => ({ ...prev, userId: data?.id }))
    //     getMasterData().then(setMasterData)
    //     getUserTypeData().then(setUserTypeData)
    // }, [])

    const onChangeHandler = (e: any) => {
        // setStepTwoFormData((prev: any) => {
        //     const updatedFormData = { ...prev }
        //     if (e.target.value === '') {
        //         delete updatedFormData[e.target.name];
        //     } else if (e.target.type === 'checkbox') {
        //         if (e.target.name === "openingBalanceType") {
        //             if (e.target.checked) {
        //                 updatedFormData[e.target.name] = 'CREDIT'
        //             } else {
        //                 updatedFormData[e.target.name] = "DEBIT"
        //             }

        //         } else {
        //             updatedFormData[e.target.name] = e.target.checked
        //         }
        //     } else {
        //         updatedFormData[e.target.name] = e.target.value
        //     }
        //     return updatedFormData;
        // })
    }

    const { control, handleSubmit, formState: { errors } } = useForm ({
        resolver: yupResolver(stepForm2ValidationSchema)
    });


    return (
        <div className='grid gap-4 mb-4 sm:grid-cols-2'>
            {/* toggle btns */}
            <div className='flex items-center'>
                <div>
                    <label htmlFor="agentId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">AGENT</label>
                    <Select
                        name='agentId'
                        id='agentId'
                        className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-blue-600"
                        placeholder='Select Agent'
                        styles={customStyles}
                    />
                </div>
            </div>
            <div className='flex items-center'>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-3">Debit</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input onChange={onChangeHandler} type="checkbox" name="openingBalanceType" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Credit</span>
                </label>
            </div>

            {/* input fields */}
            <div>
                <label htmlFor="accountType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ACCOUNT TYPE</label>
                <Select
                    name='accountType'
                    id='accountType'
                    className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-blue-600"
                    placeholder='Select Account Type'
                    styles={customStyles}
                />
            </div>
            <div>
                <label htmlFor="openingBalance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">OPENING BALANCE</label>
                <input onChange={onChangeHandler} type="text" name="openingBalance" id="openingBalance" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Opening Balance" required={true} />
            </div>
            <div>
                <label htmlFor="subBrokerSharing" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SUB BROKER SHARING</label>
                <input onChange={onChangeHandler} type="text" name="subBrokerSharing" id="subBrokerSharing" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sub Broker Sharing" required={true} />
            </div>
            <div>
                <label htmlFor="pnlNetSharing" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PNL NET SHARING</label>
                <input onChange={onChangeHandler} type="text" name="pnlNetSharing" id="pnlNetSharing" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PNL Net Sharing" required={true} />
            </div>
            <div>
                <label htmlFor="pnlGrossSharing" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PNL GROSS SHARING</label>
                <input onChange={onChangeHandler} type="text" name="pnlGrossSharing" id="pnlGrossSharing" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PNL Gross Sharing" required={true} />
            </div>
            <div>
                <label htmlFor="ledgerInterest" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LEDGER INTEREST</label>
                <input onChange={onChangeHandler} type="text" name="ledgerInterest" id="ledgerInterest" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ledger Interest" required={true} />
            </div>
            <div>
                <label htmlFor="liveMargin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LIVE MARGIN</label>
                <Select
                    id='liveMargin'
                    name='liveMargin'
                    className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-blue-600"
                    // options={masterData?.liveMargin && Object.entries(masterData?.liveMargin)?.map(([key, value]: any) => ({ label: value, value: key }))}
                    // onChange={(val: any) => setStepTwoFormData((prev: any) => ({ ...prev, liveMargin: (val?.label)?.toUpperCase()?.replaceAll(" ", "_") }))}
                    placeholder='Select Live Margin'
                    styles={customStyles}
                />
            </div>
            <div>
                <label htmlFor="margin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">MARGIN</label>
                <input onChange={onChangeHandler} type="text" name="margin" id="margin" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Margin" required={true} />
            </div>
            <div>
                <label htmlFor="marginMultiplier" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">MARGIN MULTIPLIER</label>
                <input onChange={onChangeHandler} type="text" name="marginMultiplier" id="marginMultiplier" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Margin Multiplier" required={true} />
            </div>
            <div>
                <label htmlFor="ledgerBalance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LEDGER BALANCE</label>
                <input onChange={onChangeHandler} type="text" name="ledgerBalance" id="ledgerBalance" className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ledger Balance" required={true} />
            </div>
            <div>
                <label htmlFor="lossPercentageAlert" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LOSS PERCENTAGE ALERT</label>
                <input onChange={onChangeHandler} type="text" name="lossPercentageAlert" id="lossPercentageAlert" className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900  border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Loss Percentage Alert" required={true} />
            </div>
            <div>
                <label htmlFor="closePercentageAlert" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CLOSE PERCENTAGE ALERT</label>
                <input onChange={onChangeHandler} type="text" name="closePercentageAlert" id="closePercentageAlert" className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900  border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Close Percentage Alert" required={true} />
            </div>
            <div>
                <p className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>ORDER BETWEEN HIGH LOW</p>
                <div className='flex items-center'>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-3">No</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input onChange={onChangeHandler} name='orderBetweenHighLow' type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</span>
                    </label>
                </div>

                <p className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>INTRA DAY SQUARE</p>
                <div className='flex items-center'>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-3">No</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input onChange={onChangeHandler} name='intraDayAutoSquare' type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</span>
                    </label>
                </div>
            </div>
            <div>
                <p className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>APPLY AUTO SQUARE</p>
                <div className='flex items-center'>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-3">No</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input onChange={onChangeHandler} name='applyAutoSquare' type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</span>
                    </label>
                </div>

                <p className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>ONLY POSITION SQUARE OFF</p>
                <div className='flex items-center'>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-3">No</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input onChange={onChangeHandler} name="onlyPostingSquareOff" type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default StepTwoForm;
