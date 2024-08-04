import "@logseq/libs";
import { send } from "./send-task";

async function main() {
  await logseq.Editor.registerBlockContextMenuItem(
    "Send to Things3",
    async (block) => {
      await send(block.uuid);
    },
  );

  await logseq.Editor.registerSlashCommand("Send to Things3", async (block) => {
    await send(block.uuid);
  });
}

logseq.ready(main).catch(console.error);
