import * as yup from 'yup';

const stepForm2ValidationSchema = yup.object().shape({
    agentId: yup.string().required('Agent is required'),
    openingBalanceType: yup.boolean().required('Opening Balance Type is required'),
    accountType: yup.string().required('Account Type is required'),
    openingBalance: yup.number().typeError('Opening Balance must be a number').required('Opening Balance is required'),
    subBrokerSharing: yup.number().typeError('Sub Broker Sharing must be a number').required('Sub Broker Sharing is required'),
    pnlNetSharing: yup.number().typeError('PNL Net Sharing must be a number').required('PNL Net Sharing is required'),
    pnlGrossSharing: yup.number().typeError('PNL Gross Sharing must be a number').required('PNL Gross Sharing is required'),
    ledgerInterest: yup.number().typeError('Ledger Interest must be a number').required('Ledger Interest is required'),
    liveMargin: yup.string().required('Live Margin is required'),
    margin: yup.number().typeError('Margin must be a number').required('Margin is required'),
    marginMultiplier: yup.number().typeError('Margin Multiplier must be a number').required('Margin Multiplier is required'),
    ledgerBalance: yup.number().typeError('Ledger Balance must be a number').required('Ledger Balance is required'),
    lossPercentageAlert: yup.number().typeError('Loss Percentage Alert must be a number').required('Loss Percentage Alert is required'),
    closePercentageAlert: yup.number().typeError('Close Percentage Alert must be a number').required('Close Percentage Alert is required'),
    orderBetweenHighLow: yup.boolean().required('Order Between High Low is required'),
    intraDayAutoSquare: yup.boolean().required('Intra Day Auto Square is required'),
    applyAutoSquare: yup.boolean().required('Apply Auto Square is required'),
    onlyPostingSquareOff: yup.boolean().required('Only Posting Square Off is required')
});

export default stepForm2ValidationSchema;
