import { Box, Typography } from "../../atoms";

export default function Footer() {
  return (
    <footer className="flex flex-col mb-4">
      <p>Footer</p>
      <Box
        as="container"
        direction="column"
        items="center"
        justify="between"
        className="sm:flex-row py-4 gap-4 rounded-md bg-gray-50 bg-opacity-5"
      >
        <Box as="div" direction="column" className="ml-3">
          <Typography tags="p">
            &copy; {new Date().getFullYear()} Wikimo - All rights reserved.
          </Typography>
        </Box>
        <Box as="div" direction="row" className="sm:mr-3"><p>&nbsp;</p></Box>
      </Box>
    </footer>
  );
}
