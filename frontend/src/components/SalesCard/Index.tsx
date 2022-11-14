import NotificationButton from '../NotificationButton/Index'
import './styles.css'

function SalesCard() {
    return (
        <>
            <div className="vendasmeta-card">
                <h2 className="vendasmeta-sales-title">Vendas</h2>
                <div>
                    <div className="vendasmeta-form-control-container">
                        <input className="vendasmeta-form-control" type="text" />
                    </div>
                    <div className="vendasmeta-form-control-container">
                        <input className="vendasmeta-form-control" type="text" />
                    </div>
                </div>

                <div>
                    <table className="vendasmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="showsince992">ID</th>
                                <th className="showsince">Data</th>
                                <th>Vendedor</th>
                                <th className="showsince992">Visitas</th>
                                <th className="showsince992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="showsince992">#555</td>
                                <td className="showsince">09/11/2022</td>
                                <td>Vanusa</td>
                                <td className="showsince992">20</td>
                                <td className="showsince992">18</td>
                                <td>R$6300.00</td>
                                <td>
                                    <div className="vendasmeta-red-btn-container">
                                        <NotificationButton />
                                        
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td className="showsince992">#555</td>
                                <td className="showsince">09/11/2022</td>
                                <td>Vanusa</td>
                                <td className="showsince992">20</td>
                                <td className="showsince992">18</td>
                                <td>R$6300.00</td>
                                <td>
                                    <div className="vendasmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td className="showsince992">#555</td>
                                <td className="showsince">09/11/2022</td>
                                <td>Vanusa</td>
                                <td className="showsince992">20</td>
                                <td className="showsince992">18</td>
                                <td>R$6300.00</td>
                                <td>
                                    <div className="vendasmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>

                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>


            </div>

        </>
    )
}

export default SalesCard