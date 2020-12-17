let allCommands = [
  {
    command: "ls",
    description:
      "Lists all files and directories in the present working directory",
  },
  {
    command: "ls -R",
    description: "Lists files in sub-directories as well",
  },
  {
    command: "ls -a",
    description: "Lists hidden files as well",
  },
  {
    command: "ls -al",
    description:
      "Lists files and directories with detailed information like permissions, size, owner, etc.",
  },
  {
    command: "cat > filename",
    description: "Creates a new file",
  },
  {
    command: "lcat filename",
    description: "Displays the file content",
  },
  {
    command: "cat file1 file2 > file3",
    description:
      "Joins two files (file1, file2) and stores the output in a new file (file3)",
  },
  {
    command: "mv  file 'new file path'",
    description: "Moves the files to the new location",
  },
  {
    command: "mv filename new_file_name",
    description: "Renames the file to a new filename",
  },
  {
    command: "sudo",
    description:
      "Allows regular users to run programs with the security privileges of the superuser or root",
  },
  {
    command: "rm filename",
    description: "Deletes a file",
  },
  {
    command: "man",
    description: "Gives help information on a command",
  },
  {
    command: "history",
    description:
      "Gives a list of all past commands typed in the current terminal session",
  },
  {
    command: "clear",
    description: "Clears the terminal",
  },
  {
    command: "mkdir directoryname",
    description:
      "Creates a new directory in the present working directory or a at the specified path",
  },
  {
    command: "rmdir",
    description: "Deletes a directory",
  },
  {
    command: "pr -n",
    description: "Denotes the file with Line Numbers",
  },
  {
    command: "pr -h",
    description: "Assigns a header to the file",
  },
  {
    command: "lp -nc",
    description: "Prints 'c' copies of the File",
  },
  {
    command: "lpr c",
    description: "Prints 'c' copies of the File",
  },
  {
    command: "lp -d",
    description: "Specifies name of the printer",
  },
  {
    command: "lp -p",
    description: "Specifies name of the printer",
  },
  {
    command: "apt-get",
    description: "Command used to install and update packages",
  },
  {
    command: "mail -s 'subject' -c 'cc-address' -b 'bcc-address' 'to-address",
    description: "Command to send email",
  },
  {
    command: "mail -s 'Subject' to-address < Filename",
    description: "Command to send email with attachment",
  },
];

const allColors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",

  "Bisque",

  "BlanchedAlmond",

  "CadetBlue",

  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",

  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",

  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",

  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",

  "MediumAquaMarine",

  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",

  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",

  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",

  "SeaGreen",

  "Sienna",
  "Silver",

  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "Tan",
  "Teal",

  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
];
