export const accountList = [
    {
        numeroCuenta: '1234567890',
        tipoCuenta: 'Corriente',
        propietario: 'Juanito Guerron',
        saldoDisponible: '1250$'
        
    },
    {
        numeroCuenta: '0987654321',
        tipoCuenta: 'Ahorros',
        propietario: 'Jane Smith',
        saldoDisponible: '2250$'
    },
    {
        numeroCuenta: '5678901234',
        tipoCuenta: 'Corriente',
        propietario: 'Mike Johnson',
        saldoDisponible: '2450$'
    },
    {
        numeroCuenta: '4321098765',
        tipoCuenta: 'Ahorros',
        propietario: 'Sarah Davis',
        saldoDisponible: '2750$'
    },
    {
        numeroCuenta: '9876543210',
        tipoCuenta: 'Corriente',
        propietario: 'Emily Wilson',
        saldoDisponible: '2350$'
    }
];

export const getAccountList = () => {
    return accountList;
}

export const getAccountByNumber = (accountNumber) => {
    // console.log("--------------- ",accountNumber);
    return accountList.find(account => account.numeroCuenta === accountNumber);
}
