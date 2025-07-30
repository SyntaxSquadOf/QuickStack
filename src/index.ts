import app from "./server";
import { PORT } from "./config/Process";
import { InfoLogger } from "./utils/logger";

app.listen(PORT, () => {
  InfoLogger(`Server running on port http://localhost:${PORT}`);
});
