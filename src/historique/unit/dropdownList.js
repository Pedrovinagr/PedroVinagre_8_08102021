import {DpdLData} from '../Datas/DpdLData'


function DropdownList() {
    
    return(
        <div>
            {DpdLData.map(({id, title, description}) => (
                <div>
                    <div key={id}>
                        {title}
                    </div>
                    <div key={id}>
                        {description}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DropdownList