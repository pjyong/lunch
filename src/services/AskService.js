import xhr from './xhr/index'

class AskService {
    fetchLatestSolvedQuestions(){
        let url = 'ask/latestquestions'

        return xhr({url})
    }

    fetchAllCategories(){
        let url = 'ask/allcategories'

        return xhr({url})
    }

    searchQuestions(){
        let url = 'ask/search'
        return xhr({url})
    }

    fetchAllBrands(){
        let url = 'ask/getbrands'
        return xhr({url})
    }

    fetchAllCarClasses(params){
        let url = 'ask/getcarclasses'

        return xhr({
            method: 'get',
            url: url,
            body: params
        })
    }

}

export default new AskService()
