
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require ("./src/template.js");


const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const newStaff = [];


const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                message: "Enter your Name",
                name: "name",
            },
            {
                type: "input",
                message: "Enter your ID Number",
                name: "id",
            },
            {
                type: "input",
                message: "Enter your Email",
                name: "email",
            },
            {
                type: "list",
                message: "Enter your Role",
                name: "role",
                choices: ["Engineer", "Intern", "Manager"],
            },
        ])





        if (answers.role === "Manager") {
            const managerAnswer = await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Enter your Office Number",
                        name:"officeNumber",
                    },
                ])
                const newManager = new Manager(
                    answers.name,
                    answers.id,
                    answers.email,
                    managerAnswer.officeNumber
                );
            newStaff.push(newManager);
        
        
        } else if (answers.role === "Engineer") {
            const githubAnswers = await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Enter your GitHub username.",
                        name: "github",
                    }
                ])
            const newEngineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                githubAnswers.github
            );
            newStaff.push(newEngineer);

            
        } else if (answers.role === "Intern") {
            const internAnswers = await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Enter your Attended University.",
                        name: "school",
                    },
                ])

            const newIntern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                internAnswers.school
            );
            newStaff.push(newIntern);
        }

};

async function questionPrompt() {
    await questions()


    const newMemberAnswers = await inquirer
        .prompt([
            {
                name:"newMember",
                type: "list",
                message: "Enter one of these Options",
                choices: ["Add new Member", "Create Team"]
            }
        ])
        
        if (newMemberAnswers.newMember === "Add new Member") {
            return questionPrompt()
        }
        return createTeam();
}

questionPrompt();

function createTeam () {
    fs.writeFileSync(
    "./pageFiles/index.html", 
    generateHTML(newStaff),
    "utf-8"
    );
}