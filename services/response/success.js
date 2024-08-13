class Response200 {
    constructor(
        html,
        success){
            
    this.html = html ?? "";
    this.success = success ?? undefined;
        }

}
module.exports = {
    Response200
};
