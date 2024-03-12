import { BlockIdentity } from "@logseq/libs/dist/LSPlugin.user";

export const send = async (uuid: BlockIdentity): Promise<void> => {
  try {
    const blk = await logseq.Editor.getBlock(uuid);
    const currGraph = await logseq.App.getCurrentGraph();
    if (!blk || !currGraph) throw new Error();

    const content = `Source: logseq://graph/${currGraph.name}`;

    window.open(
      `things:///add?title=${encodeURIComponent(
        blk.content,
      )}&notes=${encodeURIComponent(content)}?block-id=${uuid}& x - success`,
    );

    await logseq.UI.showMsg("Successfully sent to Things!", "success");
  } catch (e) {
    console.error(e);
    await logseq.UI.showMsg(
      `Sending to Things failed ${(e as Error).message}`,
      "error",
    );
  }
};
