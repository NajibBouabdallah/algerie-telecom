export const useQuery = (userName) =>{
    const query= `*[_type == "name" && name == '${userName}']`;
    return query;
}