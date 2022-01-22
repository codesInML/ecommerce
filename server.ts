import app from "./app";
import logger from "./src/logger";

// set the port
const PORT = process.env.PORT;

// start the express app
const start = async () => {
  try {
    app.listen(PORT, () =>
      logger.info(`server started on http://localhost:${PORT}`)
    );
  } catch (err) {
    process.exit(1);
  }
};

start();
