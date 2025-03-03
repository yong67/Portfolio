/**
 * 
 */<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Contact Response Page</title>
<link rel="stylesheet" type="text/css" href="contact-response.css">
</head>
<body>

	<h1>Contact Response Detail</h1>
	<table>
		<tr>
			<th>Field</th>
			<th>Value</th>
		</tr>
		<tr>
			<td>Name:</td>
			<td>${param.name}</td>
		</tr>
		<tr>
			<td>Email:</td>
			<td>${param.email}</td>
		</tr>
		<tr>
			<td>Phone number:</td>
			<td>${param.phone}</td>
		</tr>
		<tr>
			<td>Text:</td>
			<td>${param.message}</td>
		</tr>
	</table>
</body>
</html>