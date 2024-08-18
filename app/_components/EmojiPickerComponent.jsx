"use client";
import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";

function EmojiPickerComponent({ children, setEmojiIcon }) {
	const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
	return (
		<div>
			<div onClick={() => setOpenEmojiPicker(!openEmojiPicker)}>{children}</div>
			{openEmojiPicker && (
				<div className="absolute z-10 mt-2">
					<EmojiPicker
						emojiStyle="native"
						onEmojiClick={(e) => {
							setEmojiIcon(e.emoji);
							setOpenEmojiPicker(false);
						}}
					/>
				</div>
			)}
		</div>
	);
}

export default EmojiPickerComponent;
