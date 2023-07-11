const { execSync } = require("child_process");

const commands = [
	"npx sequelize-cli db:migrate:undo:all",
	"npx sequelize-cli db:migrate",
	"npx sequelize-cli db:seed:all",
];

commands.forEach(command => {
	execSync(command, { stdio: "inherit" });
});
