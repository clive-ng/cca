/*
	*	File:		ecms_config.js
	*	Name:		Expandable/Collapsible Menu System
	*	Date:		2001-10-06

	*	Author:		Ben Boyle
	*	Email:		bboyle@inspire.server101.com

	*	Platform:	all javascript browsers

	Configuration file for dynamic expandable/collapsible menu.
	Remove the // from comments and adjust properties to suit.

	see instructions online:
	http://inspire.server101.com/scripts/ecms/


	Functions to control menu from HTML:
		ECMS_expand_all()		(expand entire menu)
		ECMS_collapse_all()		(collapse entire menu)
		ECMS_expand('name')		(expand named menu folder)
		ECMS_collapse('name')	(collapse named menu folder)
	note: to expand/collapse a named subfolder, its parent must be expanded

	CSS display configuration classes (class names can be customised):
		.bullet		(a menu link that does not contain child items)
		.collapsed	(a menu parent that is closed)
		.expanded	(a menu parent that is open)

	CSS platform dependant styles:
		IE 4/5, N6	(DIV.stylename)
		Netscape 4x	(LAYER.stylename)
		default		(LI.stylename)

	CSS examples:
		DIV.bullet { font-weight: normal; }
		DIV.collapsed { font-weight: bold; }
		DIV.expanded { font-weight: bold; }
		LAYER.bullet { font-weight: normal; }
		LAYER.collapsed { font-weight: bold; }
		LAYER.expanded { font-weight: bold; }
		LI.bullet { font-weight: normal; list-style-type: disc; list-style-image: url(bullet.gif); }
		LI.expanded { font-weight: bold; list-style-type: circle; list-style-image: url(expanded.gif); margin-bottom: 0px; margin-left: 15px; margin-top: 0px; }

*/

/*
	menu classes
	- bullet (menu item)
	- collapsed (collapsed menu item which expands when clicked)
	- expanded (expanded menu item which collapses with clicked)
*/
ECMS_class_bullet = 'bullet';
ECMS_class_collapsed = 'collapsed';
ECMS_class_expanded = 'expanded';

/*
	menu images (not used by default system)
	- bullet (menu item)
	- collapsed (collapsed menu item which expands when clicked)
	- expanded (expanded menu item which collapses with clicked)
*/
ECMS_image_bullet.src = 'bullet.gif';
ECMS_image_collapsed.src = 'collapsed.gif';
ECMS_image_expanded.src = 'expanded.gif';

/*
	menu images ALT text (not used by default system)
	- bullet (menu item)
	- collapsed (collapsed menu item which expands when clicked)
	- expanded (expanded menu item which collapses with clicked)
*/
ECMS_image_bullet.alt = '';
ECMS_image_collapsed.alt = 'menu (show)';
ECMS_image_expanded.alt = 'menu (hide)';

/*
	indent menu items (pixel measurement from left margin)
*/
ECMS_menu_indent = 10;

/*
	height of fully expanded menu for netscape 4 (pixel measurement)
	this is to ensure enough space reserved for the menu
*/
//ECMS_menu_height = 125;

/*
	display link titles in status bar
	- if no title available, will use the name parameter
*/
ECMS_status_display = true;

/*
	repeat links on image/text
	- adds expand link on menus without their own links
	- adds link on bullet points
*/
ECMS_repeat_links = true;

/*
	collapse all other open menu branches when expanding a new branch
	values:	'menu' (collapse only within this menu)
			'all' (collapse all other menus as well)
*/
ECMS_collapse_on_expand = true;

/*
	automatically expand when the mouse is over a menu element
	delay time is in milliseconds (1000ms is 1 second)
	only works for menu folders which have a url specified
*/
ECMS_auto_expand = false;
ECMS_auto_expand_delay = 750;


/*
BUILD THE MENU
ECMS_add_item(level, name, url, target, expanded, title);
	- level:		level of the item (0 is a top level menu choice, 1 under that, 2 under that)
	- name:			text displayed for the item (HTML markup allowed)
	- url:			link for this item
	- target:		target frame for link
	- expanded:		true/false (initial expanded?  false is default)
	- title:		title for link (often appears as a tooltip on the link)
*/

// home (example menu)
ECMS_add_item(0, '．Welcome', 'welcome.htm','middle');
ECMS_add_item(0, '．Staff', 'staff.htm','middle');
ECMS_add_item(0, '．Specializations', 'specializations.htm','middle');
ECMS_add_item(0, '．Programmes', 'programe.htm','middle');
ECMS_add_item(0, '．Research');
ECMS_add_item(1, '．Journal - APJAE', 'http://www.ied.edu.hk/cca/apjae/index.htm','_blank');
ECMS_add_item(1, '．Internal Research Grant', 'research.htm#irg','middle');
ECMS_add_item(1, '．General Research Fund', 'research.htm#grf','middle');
ECMS_add_item(1, '．Creative Outputs', 'research.htm#co','middle');

ECMS_add_item(0, '．Publications');
ECMS_add_item(1, '．Art and Cultural Studies', 'publication.htm#acs','middle');
ECMS_add_item(1, '．Art and Media Studies', 'publication.htm#ams','middle');
ECMS_add_item(1, '．Art Education', 'publication.htm#ae','middle');
ECMS_add_item(1, '．Aesthetic & Criticism', 'publication.htm#ahac','middle');
ECMS_add_item(1, '．Music Education', 'publication.htm#me','middle');
ECMS_add_item(1, '．Music Studies', 'publication.htm#ms','middle');
ECMS_add_item(1, '．Music Curriculum', 'publication.htm#mc','middle');
ECMS_add_item(1, '．Music Pedagogy', 'publication.htm#mp','middle');
ECMS_add_item(1, '．Music and Creativity', 'publication.htm#mcr','middle');
ECMS_add_item(1, '．Music & Integrated Learning', 'publication.htm#mil','middle');
ECMS_add_item(1, '．Music and Technology', 'publication.htm#mt','middle');

ECMS_add_item(0, '．Projects');
ECMS_add_item(1, '．TDG', 'project.htm#tdg','middle');
ECMS_add_item(1, '．SPF', 'project.htm#spf','middle');
ECMS_add_item(1, '．AEI', 'project.htm#aei','middle');
ECMS_add_item(1, '．IT', 'project.htm#it','middle');
ECMS_add_item(1, '．QEF', 'project.htm#qef','middle');
ECMS_add_item(1, '．ADC', 'project.htm#adc','middle');
ECMS_add_item(1, '．OTHER', 'project.htm#oth','middle');







ECMS_add_item(0, '．Awards & Scholarships', 'awards.htm','middle');
ECMS_add_item(0, '．Facilities');
ECMS_add_item(1, '．Music', 'facilities.htm#mu','middle');
ECMS_add_item(1, '．Visual arts', 'facilities.htm#va','middle');

ECMS_add_item(0, '．Events', 'events.htm','middle');
ECMS_add_item(0, '．Community School', 'http://www.ied.edu.hk/cass/','_blank');
ECMS_add_item(0, '．Alumni Activities', 'alumni.htm','middle');
ECMS_add_item(0, '．Contact', 'contact.htm','middle');
ECMS_end_menu();

