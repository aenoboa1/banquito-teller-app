export const accountList = [
    {
        numeroCuenta: '1234567890',
        tipoCuenta: 'Corriente',
        propietario: 'John Doe'
    },
    {
        numeroCuenta: '0987654321',
        tipoCuenta: 'Ahorros',
        propietario: 'Jane Smith'
    },
    {
        numeroCuenta: '5678901234',
        tipoCuenta: 'Corriente',
        propietario: 'Mike Johnson'
    },
    {
        numeroCuenta: '4321098765',
        tipoCuenta: 'Ahorros',
        propietario: 'Sarah Davis'
    },
    {
        numeroCuenta: '9876543210',
        tipoCuenta: 'Corriente',
        propietario: 'Emily Wilson'
    }
];

export const getAccountList = () => {
    return accountList;
}

export const getAccountByNumber = (accountNumber) => {
    // console.log("--------------- ",accountNumber);
    return accountList.find(account => account.numeroCuenta === accountNumber);
}
