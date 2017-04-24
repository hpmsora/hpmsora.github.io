<div class="contact_contents_wrap">
	<link rel="stylesheet" type="text/css" href="CSS/ContactContentsStyle.css">
	<script rel="text/javascript" src="JAVASCRIPT/ContactContentsJavascript.js"></script>
	<script rel="text/javascript" src="JAVASCRIPT/jquery.min.js"></script>
	<script rel="text/javascript" src="JAVASCRIPT/jquery.validate.min.js"></script>
	<script rel="text/javascript" src="JAVASCRIPT/jquery.form.js"></script>
	<script rel="text/javascript" src="JAVASCRIPT/contact.js"></script>
	<div class="contactInnerWarp">
		<div class="contactQuoteWrap">
			<div class="contactQuoteInner_Up"></div>
			<div class="contactQuoteInner_Quote">
				<span>THE ART OF COMPUTER AND CODING</span>
			</div>
			<div class="contactQuoteInner_Down"></div>
		</div>
		<div class="contactImageWrap">
			<div class="contactImageInner_Up"></div>
			<div class="contactImageInner_Image">
				<img class = "Contact_Image" src="ASSETS/ExampleImage.jpg">
			</div>
			<div class="contactImageInner_Down"></div>
		</div>
		<div class="contactContactButtonWrap">
			<div class="contactContactButtonInner_Up"></div>
			<div class="contactContactButtonInner_Button">
				<a class="contactContactButton" href="#" onclick="showContact()">CONTACT</a>
			</div>
			<div class="contactContactButtonInner_Down"></div>
		</div>
		<div id="contactContactSessionWarp_id" class="contactContactSessionWarp" style="display:none;">
			<form id="contactForm" action="processForm.php" method="post">
				<div class="contactContactSessionInput1">
					<div class="contactContactSessionInput1Inner">
						<div class="contactContactSessionInput1InnerNameField">
							<span>Name</span>
							<input type="text" id="name" name="name" />
						</div>
					</div>
					<div class="contactContactSessionInput1Inner">
						<div class="contactContactSessionInput1InnerEmailField">
							<span>Email</span>
							<input type="text" id="email" name="email" />
						</div>
					</div>
				</div>
				<div class="contactContactSessionInput2">
					<textarea id="contactContactSessionInput2_Message_id message" class="contactContactSessionInput2_Message" name="message"></textarea>
				</div>
				<div class="contactContactSessionSubmit">
					<input type="submit" id="send" value="Send Email" />
				</div>
			</form>
			<div id="response"></div>
		</div>
	</div>
</div>