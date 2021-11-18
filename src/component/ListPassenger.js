import ListItem from './ListItem';

const ListPassenger = (props) => {
    
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {props.data?.anggota.map((item) => (
                    <ListItem
                        key={item.id}
                        id={item.id}
                        nama={item.nama}
                        umur={item.umur}
                        jenis_kelamin={item.jenis_kelamin}
                        hapusPengunjung={props.hapusPengunjung}
                        editPengunjung={props.editPengunjung}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;