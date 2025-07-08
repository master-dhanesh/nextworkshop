const CreateFeedback = () => {
    const FeedbackFormHandle = async (event) => {
        event.preventDefault();
        const feedbackData = {
            title: event.target.title.value,
            description: event.target.description.value,
        };
        const response = await fetch("http://localhost:3000/api/feedback", {
            method: "POST",
            body: JSON.stringify(feedbackData),
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Feedback submitted successfully:", data);
            event.target.reset(); // Reset the form after submission
        } else {
            console.error("Failed to submit feedback");
        }
    };

    return (
        <form
            onSubmit={FeedbackFormHandle}
            className="py-10 px-[10%] font-thin"
        >
            <h1 className="text-2xl mb-4">Create Feedback</h1>
            <div className="mb-4">
                <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    rows="4"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Submit Feedback
            </button>
        </form>
    );
};

export default CreateFeedback;
