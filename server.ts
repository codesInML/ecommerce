import app from "./app";

// set the port
const PORT = process.env.PORT;

// start the express app
const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`server started on http://localhost:${PORT}`)
    );
  } catch (err) {
    process.exit(1);
  }
};

start();
