import { spawn } from "child_process";

console.log("dev-server.js received arguments:", process.argv);

const args = process.argv.slice(2);
let port = "3000";
let host = "0.0.0.0";

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === "--host" || arg === "-h") {
    if (args[i + 1] && !args[i + 1].startsWith("-")) {
      host = args[i + 1];
      i++;
    }
  } else if (arg.startsWith("--host=")) {
    host = arg.split("=")[1];
  } else if (arg === "--port" || arg === "-p") {
    if (args[i + 1] && !args[i + 1].startsWith("-")) {
      port = args[i + 1];
      i++;
    }
  } else if (arg.startsWith("--port=")) {
    port = arg.split("=")[1];
  }
}

const nextArgs = ["dev", "-H", host, "-p", port];
console.log(`Executing: npx next ${nextArgs.join(" ")}`);

const child = spawn("npx", ["next", ...nextArgs], {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => {
  process.exit(code || 0);
});
