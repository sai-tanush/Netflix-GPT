import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: 'sk-PSnhJjIgPeiDlMue4SWYp37f-40ptsyBEZLr-ymVYET3BlbkFJ-2OGfAR6GlQk4NAx3O9n_NJlhJ5ieo39UtgNrhp4IA',
    dangerouslyAllowBrowser: true,
})

export default openai;