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

}

export default new AskService()
