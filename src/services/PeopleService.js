import xhr from './xhr/index'

class PeopleService {
    fetch(){
        let url = '/people'

        return xhr({url})
    }

    toggleEat(params){
        let url = '/toggleeat'

        return xhr({
            method: 'post',
            url: url,
            body: params
        })
    }

    addPeople(params){
        let url = '/addpeople'

        return xhr({
            method: 'post',
            url: url,
            body: params
        })
    }
}

export default new PeopleService()
