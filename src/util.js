export default function filterData(data){
    delete data['createdAt']
    delete data['updatedAt']
    return data
}
