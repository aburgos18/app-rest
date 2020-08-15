const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

//get all posts
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.json({ message: err });
	}
});

//submit a post
router.post("/", async ({ body }, res) => {
	const post = new Post({
		title: body.title,
		description: body.description
	});

	try {
		const savedPost = await post.save();
		res.json(savedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

//specific post
router.get("/:postId", async ({ params }, res) => {
	const { postId } = params;
	try {
		const post = await Post.findById(postId);
		res.json(post);
	} catch (err) {
		res.json({ message: err });
	}
});

//delete a specific post
router.delete("/:postId", async ({ params }, res) => {
	const { postId } = params;
	try {
		const removedPost = await Post.remove({ _id: postId });
		res.json(removedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

//update a post
router.patch("/:postId", async ({ body, params }, res) => {
	const { postId } = params;
	const { title, description } = body;
	let setValues = {};
	if (title) {
		setValues.title = title;
	}
	if (description) {
		setValues.description = description;
	}
	try {
		const updatedPost = await Post.updateOne({ _id: postId }, { $set: setValues });
		res.json(updatedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
