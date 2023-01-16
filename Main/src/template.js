
const generateHTML = (team) => {

    const generateManager = (manager) => {
        return `
        <div class="card employee-card">
            <div class="card-header"> 
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</h3>
            </div>
                <div class="card-body">
                    <ul class= "list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="malito: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
        </div>
        `;
    };


    const generatorEngineer = (engineer) => {
        return ` 
            <div class="card employee-card"> 
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="malito:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
            </div>
            `;
    };


    const generateIntern = (intern) => {
        return `
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-university"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="malito:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
            `;
    };

    const html = [];

    html.push(
        team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManager(manager))
    );
    html.push(
        team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generatorEngineer(engineer))
        .join("")
    );
    html.push(
        team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateIntern(intern))
        .join("")
    );

    return html.join("");
};


module.exports = (team) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/css/bootstrap-grid.min.css" 
                    integrity="sha512-3AxW5HcDzhL9MJdO2mpDEGEZ6NcCg/pDSa8R2kH5gwEA4r48RxZf0nPITA1NfX1pNA6a/eAayX+yW6QopF4jeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <link rel="stylesheet" href="style.css">
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js" integrity="sha512-rpLlll167T5LJHwp0waJCh3ZRf7pO6IT1+LZOhAyP6phAirwchClbTZV3iqL3BMrVxIYRbzGTpli4rfxsCK6Vw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            </head>
        
        <body> 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        ${generateHTML(team)}
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;
};  