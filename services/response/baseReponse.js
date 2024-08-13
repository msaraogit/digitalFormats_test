class BaseResponse {
    constructor(response){
    this.html = response.html ?? "";
    this.success = response.success ?? undefined;
        }
}
module.exports = {
    BaseResponse
};
