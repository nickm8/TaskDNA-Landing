import { Octokit } from '@octokit/rest';

const GIST_ID = process.env.GIST_ID;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
  auth: GITHUB_TOKEN
});

export async function GET() {
  try {
    // Get the current gist content
    const gist = await octokit.gists.get({ gist_id: GIST_ID });
    const filename = Object.keys(gist.data.files)[0];
    const content = gist.data.files[filename].content;
    
    // Parse current count and increment
    let count = parseInt(content) || 0;
    count++;
    
    // Update the gist with new count
    await octokit.gists.update({
      gist_id: GIST_ID,
      files: {
        [filename]: {
          content: count.toString()
        }
      }
    });
    
    return Response.json({ count });
  } catch (error) {
    console.error('Error updating page views:', error);
    return Response.json({ error: 'Failed to update page views' }, { status: 500 });
  }
}
