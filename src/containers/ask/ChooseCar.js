import { connect } from 'react-redux'
import ChooseCar from '../../components/ask/ChooseCar'
import {changeSearch, fetchAllBrands} from '../../actions/ask'

const mapStateToProps = (state) => {
    return {
        brandList: state.brandList,
    }
}

const mapDispatchToProps = {
    changeSearch,
    fetchAllBrands
}

const CChooseCar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseCar)

export default CChooseCar
