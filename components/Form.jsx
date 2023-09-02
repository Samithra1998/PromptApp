import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-col flex-start ">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc max-w-md text-left">
        {type} and share your amazing prompts with the community
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satosho font-semibold text-base text-gray-700">
            Your Ai Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            className="form_textarea"
            required
            placeholder="Your prompt here..."
          />
        </label>
        <label>
          <span className="font-satosho font-semibold text-base text-gray-700">
            Tag <span className="text-normal">(#frontend #web #fullstack)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            className="form_input"
            required
            placeholder="#tag"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="bg-teal-700 text-sm rounded-full text-white px-7 py-2"
          >
            {submitting ? `${type} ...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
