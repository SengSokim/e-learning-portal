const { gql, default: request } = require("graphql-request")

const MASTER_URL = "https://api-ap-northeast-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCoursesList = async () => {
    const query = gql`
        query MyQuery {
            courses {
                id
                name
                price
                publishedAt
                isFree
                description
                coverImage {
                    url
                }
            }
        }
    `

    const result = await request(MASTER_URL, query);
    return result;
}
const getSidebanner = async () => {
    const query = gql`
        query SideBanner {
            sidebanners {
            id
            name
            url 
            banner {
                url
            }
            }
        }
    `

    const result = await request(MASTER_URL, query);
    return result;
}

export default {
    getAllCoursesList,
    getSidebanner
};