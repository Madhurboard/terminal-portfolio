let x = 'https://twitter.com/MadhurBoard';
let linkedin = 'www.linkedin.com/in/madhurboard';
let github = 'https://github.com/Madhurboard';
let website = 'https://madhurboard.github.io/';
let instagram = 'https://www.instagram.com/simply.madhur/';
let repo = 'hhttps://github.com/Madhurboard/madhurboard.github.io';
let project = 'https://github.com/Madhurboard?tab=repositories';
let project_site = ""
let existCommands = [
  'about',
  'banner',
  'clear',
  'cls',
  'date',
  'github',
  'gui',
  'help',
  'history',
  'linkedin',
  'project',
  'repo',
  'social',
  'theme',
  'theme ls',
  'theme set',
  'x',
  'whoami',
  'cd ..'
];

about = [
  "&nbsp;",
  "&nbsp;",
  "Hi There 👋, I'm <span style='color: yellow;'>Madhur Patil</span> ",
  "&nbsp;",
  "A Software Engineering undergraduate at MIT-ADT University.",
  "Technical team member at GfG, CodeChef and AWS Club.",
  "Just an enthusiastic learner who loves to try new things.",
  "&nbsp;",
  "&nbsp;",
  'Connect With me 💫',
'&nbsp;',
// '<p align="center">',

'<a href="https://twitter.com/MadhurBoard" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="twitter" height="30" width="40" /></a> <a href="www.linkedin.com/in/madhurboard" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="utkar5hm" height="30" width="40" /></a> <a href="https://www.instagram.com/simply.madhur/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="sujay" height="30" width="40" /></a>',


'&nbsp;',
'&nbsp;',
];

social = [
  'TO open the below social profiles Type the desired one!',
  'Example : github',
  '----------------',
  '&nbsp;',
  '<a href="https://github.com/Madhurboard" style="color: skyblue;">Github</a>',
  '<a href="https://twitter.com/MadhurBoard" style="color: skyblue;">X</a>',
  '<a href="www.linkedin.com/in/madhurboard" style="color: skyblue;">Linkedin</a>',
  '<a href="https://www.instagram.com/simply.madhur/" style="color: skyblue;">Instagram</a>'
];

exit = [
  'terminating...',
];


themes = ['dark', 'light'];

theme = [
  'Usage: theme [arg]',
  'Args:',
  ' - ls: list all available themes',
  ' - set: set a theme',
  '<br>',
  'Example:',
  ' theme ls # to list all available themes',
  ' <span style="color:skyblue;">theme set light</span> # to set a theme',
];




help = [
  '<span class="command">about  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        - </span>     <span class="helpdes">about me</span>',
  '<span class="command">banner &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </span> <span class="helpdes">Display the header</span>',
  '<span class="command">clear | cls   &nbsp;&nbsp; - </span>  <span class="helpdes">   Clear the teminal</span>',
  '<span class="command">date  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         - </span> <span class="helpdes">    Display the actual date</span>',
  '<span class="command">gui  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          - </span>    <span class="helpdes"> Open the Portfolio Website</span>',
  '<span class="command">help  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         - </span>     <span class="helpdes">Check available commands</span>',
  '<span class="command">history &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - </span> <span class="helpdes">    View command history</span>',
  '<span class="command">project &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - </span>    <span class="helpdes"> View coding projects</span>',
  '<span class="command">repo     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - </span>    <span class="helpdes"> Open the source code</span>',
  '<span class="command">social &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </span>  <span class="helpdes">   Display social networks</span>',
  '<span class="command">theme    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - </span>    <span class="helpdes"> Theme configurations</span>',
  '<span class="command">pwd  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          - </span>    <span class="helpdes"> Print present working directory</span>',
  '<br>',
  '[TAB]              Trigger completion',
  '[Ctrl+l]           Clear terminal',
  '[Ctrl+p]           Go back to previous command',
];

 
banner = [
'<span style="color: yellowgreen;">visitor@terminal.madhur:~$</span> Welcome',
' &nbsp;',
' &nbsp;',
' ',
"‎ ‎ ‎ ‎ ‎ 888888888‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ))))))‎ ‎ ‎ ‎ ‎ ",
"‎ ‎ ‎ 88:::::::::88‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ )::::::))‎ ‎ ‎ ",
"‎ 88:::::::::::::88‎ ‎ ‎ ‎ ‎ ‎ ‎ ):::::::))‎ ",
"8::::::88888::::::8‎ ‎ ‎ ‎ ‎ ‎ ‎ )):::::::)",
"8:::::8‎ ‎ ‎ ‎ ‎ 8:::::8‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ )::::::)",
"8:::::8‎ ‎ ‎ ‎ ‎ 8:::::8‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ):::::)",
"‎ 8:::::88888:::::8‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ):::::)",
"‎ ‎ 8:::::::::::::8‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ):::::)",
"‎ 8:::::88888:::::8‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ):::::)",
"8:::::8‎ ‎ ‎ ‎ ‎ 8:::::8‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ):::::)",
"8:::::8‎ ‎ ‎ ‎ ‎ 8:::::8‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ):::::)",
"8:::::8‎ ‎ ‎ ‎ ‎ 8:::::8‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ )::::::)",
"8::::::88888::::::8‎ ‎ ‎ ‎ ‎ ‎ ‎ )):::::::)",
"‎ 88:::::::::::::88‎ ‎ ‎ ‎ ‎ ‎ ‎ ):::::::))‎ ",
"‎ ‎ ‎ 88:::::::::88‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ )::::::)‎ ‎ ‎ ‎ ",
"‎ ‎ ‎ ‎ ‎ 888888888‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ))))))‎ ‎ ‎ ‎ ‎ ",
'&nbsp;',
'&nbsp;',
" Hi There 👋, I'm <span style='color: yellow;'>Madhur Patil</span> ",
'Welcome To my Terminal Portfolio !',
' - - - -',
'&nbsp;',

'For a list of available commands, type<span class="command">\'help\'</span> ',

];


          //              ,##,,eew,
          //            ,##############C
          //         a###############@##
          //        7####^`^"7W7^"@####
          //        @#@b`         ^@#@^
          //         ##^,,,,   ,,,,^#^
          //        ,,@######"#######=
          //         .''555"` '5555b|
          //         T"@  ,,,^,mg,@,*
          //            %p||`~~'.#`
          //             ^Wp  ,#T
          //            :b''@@b^}
          //         ,^     ` 'b 3-
          //     .&lt;` 'p   ^v   #   b   *.
          //   {      }   #"GpGb   [
          //   C      3 * @#######Nl      `
          //  '            ^@##b     ($    !"