import app from "./app";
import config from "./app/config";

const port = config.port;

const main = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on Port http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
main();
