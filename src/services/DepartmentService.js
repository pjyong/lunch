import xhr from './xhr/index'

class DepartmentService {
    fetch(){
        let url = 'lunch/departments'

        return xhr({url})
    }
}

export default new DepartmentService()
