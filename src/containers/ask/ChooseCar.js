import { connect } from 'react-redux'
import ChooseCar from '../../components/ask/ChooseCar'
import {changeSearch, fetchAllBrands,fetchAllCarClasses} from '../../actions/ask'




const mapStateToProps = (state) => {
    return {
        brandList: state.brandList,
        carClassList: state.carClassList,
    }
}

const mapDispatchToProps = {
    changeSearch,
    fetchAllBrands,
    fetchAllCarClasses
}

const CChooseCar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseCar)

export default CChooseCar
