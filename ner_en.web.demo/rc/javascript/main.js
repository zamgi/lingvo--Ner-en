$(document).ready(function () {
    var MAX_INPUTTEXT_LENGTH  = 10000,
        LOCALSTORAGE_TEXT_KEY = 'ner-en-text',
        DEFAULT_TEXT          = 'Theodore Robert "Ted" Bundy (born Theodore Robert Cowell, November 24, 1946 – January 24, 1989) was an American serial killer, rapist, kidnapper, and necrophile who assaulted and murdered numerous young women and girls during the 1970s and possibly earlier. After more than a decade of denials, he confessed shortly before his execution to 30 homicides committed in seven states between 1974 and 1978; the true total remains unknown, and could be much higher.\n' +
'Bundy was regarded as handsome and charismatic by his young female victims, traits he exploited in winning their trust. He typically approached them in public places, feigning an injury or disability, or impersonating an authority figure, before overpowering and assaulting them at a more secluded location. He sometimes revisited his secondary crime scenes for hours at a time, grooming and performing sexual acts with the decomposing corpses until putrefaction and destruction by wild animals made further interaction impossible. He decapitated at least 12 victims and kept some of the severed heads in his apartment for a period of time as mementos. On a few occasions, he simply broke into dwellings at night and bludgeoned victims as they slept.\n' +
'Initially incarcerated in Utah in 1975 for aggravated kidnapping and attempted criminal assault, Bundy became a suspect in a progressively longer list of unsolved homicides in multiple states. Facing murder charges in Colorado, he engineered two dramatic escapes and committed multiple additional assaults, including three murders, before his ultimate recapture in Florida in 1978. He received three death sentences in two separate trials for the Florida homicides.\n' +
'Ted Bundy died in the electric chair at Raiford Prison in Starke, Florida, on January 24, 1989. Biographer Ann Rule described him as "a sadistic sociopath who took pleasure from another human\'s pain and the control he had over his victims, to the point of death, and even after."[2] He once called himself "...the most cold-hearted son of a bitch you\'ll ever meet."[3][4] Attorney Polly Nelson, a member of his last defense team, agreed. "Ted," she wrote, "was the very definition of heartless evil."[5]\n' +
'Bundy was born Theodore Robert Cowell at the Elizabeth Lund Home For Unwed Mothers (now the Lund Family Center[6]) in Burlington, Vermont on November 24, 1946 to Eleanor Louise Cowell (known for most of her life as Louise) (1924-2012). The identity of his father has never been determined with certainty. His birth certificate assigns paternity to a salesman and Air Force veteran named Lloyd Marshall,[7] but Louise later claimed that she was seduced by "a sailor" whose name may have been Jack Worthington.[8] (Years later, investigators would find no record of anyone by that name in Navy or Merchant Marine archives.[9]) Some family members expressed suspicions that the father might actually have been Louise\'s own violent, abusive father, Samuel Cowell, though there was no direct evidence to support such speculation.[10]\n' +
'For the first three years of his life Bundy lived in the Philadelphia home of his maternal grandparents, Samuel and Eleanor Cowell, who raised him as their son to avoid the social stigma that accompanied illegitimate birth at the time. Family, friends, and even young Ted were told that his grandparents were his parents and that his mother was his older sister. Eventually he discovered the truth, but how and when is not clear. He told his girlfriend that a cousin showed him a copy of his birth certificate after calling him a "bastard",[11] but he told biographers Stephen Michaud and Hugh Aynesworth that he found the certificate himself.[12] Biographer and true crime writer Ann Rule, who knew Bundy personally, believes that he tracked down his original birth record in Vermont in 1969.[13] Bundy expressed a lifelong resentment toward his mother for lying about his true parentage and leaving him to discover it for himself.[14]\n' +
'While Bundy spoke warmly of his grandparents in some interviews,[15] and told Ann Rule that he "identified with", "respected", and "clung to" his grandfather,[16] he and other family members told attorneys in 1987 that Samuel Cowell was a tyrannical bully and a bigot who hated blacks, Italians, Catholics, and Jews, beat his wife and the family dog, and swung neighborhood cats by their tails. He once threw Louise\'s younger sister Julia down a flight of stairs for oversleeping.[17] He sometimes spoke aloud to unseen presences,[18] and at least once he flew into a violent rage when the question of Ted\'s paternity was raised.[17] Bundy described his grandmother as a timid and obedient woman who periodically underwent electroconvulsive therapy for depression[18] and feared leaving their house toward the end of her life.[19] Ted occasionally exhibited disturbing behavior, even at that early age. Julia recalled awakening one day from a nap to find herself surrounded by knives from the Cowell kitchen; her three-year-old nephew was standing by the bed, smiling.[20]\n' +
'In 1950 Louise changed her surname from Cowell to Nelson, dropped her first name Eleanor,[7] and at the urging of multiple family members,[21] left Philadelphia with her son to live with cousins Alan and Jane Scott in Tacoma, Washington. In 1951 Louise met Johnny Culpepper Bundy, a hospital cook, at an adult singles night at Tacomas First Methodist Church.[22] They married later that year and Johnny Bundy formally adopted Ted.[22] Johnny and Louise conceived four children of their own, and though Johnny tried to include his stepson in camping trips and other family activities, Ted remained distant from his stepfather. He later complained to his girlfriend that Johnny wasn\'t his real father, "wasn\'t very bright", and "didn\'t make much money."[23]\n' +
'Bundy\'s Tacoma recollections varied from biographer to biographer: To Michaud and Aynesworth he described roaming his neighborhood, picking through trash barrels in search of pictures of naked women.[24] To Polly Nelson he spoke of perusing detective magazines, crime novels, and true crime documentaries for stories involving sexual violence, particularly when illustrated with pictures of dead or maimed bodies;[25] yet in a letter to Rule he asserted that he "never, ever read fact-detective magazines, and shuddered at the thought" that anyone would.[26] To Michaud, he described consuming large quantities of alcohol and "canvass[ing] the community" late at night in search of undraped windows where he could observe women undressing, or "whatever [else] could be seen."[27]\n' +
'Accounts of his social life also varied: He told Michaud and Aynesworth that he "chose to be alone" as an adolescent because he was unable to understand interpersonal relationships.[28] He claimed that he had no natural sense of how to develop friendships. "I didn\'t know what made people want to be friends," he said. "I didn\'t know what underlay social interactions."[29] However, classmates from Woodrow Wilson High School told Rule that Bundy was "well known and well liked" there, "a medium-sized fish in a large pond."[30]\n' +
'His only significant athletic avocation was snow skiing, which he pursued enthusiastically using stolen equipment and forged lift tickets.[12] During high school he was arrested at least twice on suspicion of burglary and auto theft. When he reached age 18 the details of the incidents were expunged from his record, as is customary in Washington and most other states.[31]\n' +
'After graduating from high school in 1965 Bundy spent a year at the University of Puget Sound (UPS) before transferring to the University of Washington (UW) in 1966 to study Chinese.[32] In 1967 he became romantically involved with a UW classmate who is identified in Bundy biographies by several pseudonyms, most commonly Stephanie Brooks.[33] In early 1968 he dropped out of college and worked at a series of minimum-wage jobs. He also volunteered at the Seattle office of Nelson Rockefeller\'s presidential campaign,[34] and in August, attended the 1968 Republican National Convention in Miami as a Rockefeller delegate.[35] Shortly thereafter Brooks ended their relationship and returned to her family home in California, frustrated by what she described as Bundy\'s immaturity and lack of ambition. Psychiatrist Dorothy Lewis would later pinpoint this crisis as "... probably the pivotal time in his development."[36] Devastated by Brooks\' rejection, Bundy traveled to Colorado and then further east, visiting relatives in Arkansas and Philadelphia, and enrolling for one semester at Temple University.[37] It was at this time in early 1969, Rule believes, that Bundy visited the office of birth records in Burlington and confirmed his true parentage.[37][38]\n' +
'Back in Washington in the fall of 1969, he met Elizabeth Kloepfer (identified in Bundy literature as Meg Anders, Beth Archer, or Liz Kendall), a divorcée from Ogden, Utah who worked as a secretary at the University of Washington School of Medicine.[39] Their stormy relationship would continue well past his initial incarceration in Utah in 1976. In mid-1970, now focused and goal-oriented, he re-enrolled at UW, this time as a psychology major. He became an honor student, well-regarded by his professors.[40] In 1971 he took a job at Seattle\'s Suicide Hotline crisis center. There he met and worked alongside Rule, a former Seattle police officer and aspiring crime writer who would later write one of the definitive Bundy biographies, The Stranger Beside Me. Rule saw nothing disturbing in Bundy\'s personality at the time, describing him as "kind, solicitous, and empathetic".[41]\n' +
'After graduating from UW in 1972[42] Bundy joined Governor Daniel J. Evans\'s reelection campaign.[43] Posing as a college student, he shadowed Evans\'s opponent, former governor Albert Rosellini, recording his stump speeches for analysis by Evans\'s team.[44][45] After Evans\'s reelection he was hired as an assistant to Ross Davis, Chairman of the Washington State Republican Party.';

    var textOnChange = function () {
        var _len = $("#text").val().length; 
        var len = _len.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        var $textLength = $("#textLength");
        $textLength.html("length of text: " + len + " characters");
        if (MAX_INPUTTEXT_LENGTH < _len) $textLength.addClass("max-inputtext-length");
        else                             $textLength.removeClass("max-inputtext-length");
    };
    var getText = function( $text ) {
        var text = trim_text( $text.val().toString() );
        if (is_text_empty(text)) {
            alert("Enter the text to be processed.");
            $text.focus();
            return (null);
        }
        
        if (text.length > MAX_INPUTTEXT_LENGTH) {
            if (!confirm('Exceeded the recommended limit ' + MAX_INPUTTEXT_LENGTH + ' characters (on the ' + (text.length - MAX_INPUTTEXT_LENGTH) + ' characters).\r\nText will be truncated, continue?')) {
                return (null);
            }
            text = text.substr( 0, MAX_INPUTTEXT_LENGTH );
            $text.val( text );
            $text.change();
        }
        return (text);
    };

    $("#text").focus(textOnChange).change(textOnChange).keydown(textOnChange).keyup(textOnChange).select(textOnChange).focus();

    (function () {
        function isGooglebot() {
            return (navigator.userAgent.toLowerCase().indexOf('googlebot/') != -1);
        };
        if (isGooglebot())
            return;

        var text = localStorage.getItem(LOCALSTORAGE_TEXT_KEY);
        if (!text || !text.length) {
            text = DEFAULT_TEXT;
        }
        $('#text').text(text).focus();
    })();

    $('#mainPageContent').on('click', '#processButton', function () {
        if($(this).hasClass('disabled')) return (false);

        var text = getText( $("#text") );
        if (!text) return (false);

        processing_start();
        if (text != DEFAULT_TEXT) {
            localStorage.setItem(LOCALSTORAGE_TEXT_KEY, text);
        } else {
            localStorage.removeItem(LOCALSTORAGE_TEXT_KEY);
        }

        $.ajax({
            type: "POST",
            url:  "RESTProcessHandler.ashx",
            data: {
                splitBySmiles: true,
                html         : false,
                text         : text
            },
            success: function (responce) {
                if (responce.err) {
                    if (responce.err == "goto-on-captcha") {
                        window.location.href = "Captcha.aspx";
                    } else {
                        processing_end();
                        $('.result-info').addClass('error').text(responce.err);
                    }
                } else {
                    if (responce.words && responce.words.length != 0) {
                        $('.result-info').removeClass('error').text('');
                        var ner_html = '<tr><td>';
                        var startIndex = 0;
                        for (var i = 0, len = responce.words.length; i < len; i++) {
                            var word = responce.words[i];
                            ner_html += text.substr( startIndex, word.i - startIndex ) +
                                        '<span class="' + word.ner + '">' + text.substr( word.i, word.l ) + '</span>';
                            startIndex = word.i + word.l;
                        }
                        ner_html += text.substr(startIndex, text.length - startIndex) +
                                    '</td></tr>';
                        ner_html = ner_html.replaceAll('\r\n', '<br/>').replaceAll('\n', '<br/>').replaceAll('\t', '&nbsp;&nbsp;&nbsp;&nbsp;');
                        $('#processResult tbody').html( ner_html );
                        processing_end();
                        $('.result-info').hide();
                        apply_ner_titles();
                    } else if (responce.html) {                        
                        $('.result-info').removeClass('error').text('');
                        $('#processResult tbody').html( responce.html );
                        processing_end();
                    } else {
                        processing_end();
                        $('.result-info').text('named entity not found in the text');
                    }
                }
            },
            error: function () {
                processing_end();
                $('.result-info').text('server error');
            }
        });
        
    });

    function processing_start(){
        $('#text').addClass('no-change').attr('readonly', 'readonly').attr('disabled', 'disabled');
        $('.result-info').show().removeClass('error').html('Processing... <label id="processingTickLabel"></label>');
        $('#processButton').addClass('disabled');
        $('#processResult tbody').empty();
        setTimeout(processing_tick, 1000);
    };
    function processing_end(){
        $('#text').removeClass('no-change').removeAttr('readonly').removeAttr('disabled');
        $('.result-info').removeClass('error').text('');
        $('#processButton').removeClass('disabled');
    };
    function trim_text(text) {
        return (text.replace(/(^\s+)|(\s+$)/g, ""));
    };
    function is_text_empty(text) {
        return (text.replace(/(^\s+)|(\s+$)/g, "") == "");
    };
    (function() {
        $.ajax({
            type: "POST",
            url: "RESTProcessHandler.ashx",
            data: { splitBySmiles: true, html: false, text: "_dummy_" }
        });
    })();

    String.prototype.insert = function (index, str) {
        if (0 < index)
            return (this.substring( 0, index ) + str + this.substring( index, this.length ));
        return (str + this);
    };
    String.prototype.replaceAll = function (token, newToken, ignoreCase) {
        var _token;
        var str = this + "";
        var i   = -1;
        if (typeof token === "string") {
            if (ignoreCase) {
                _token = token.toLowerCase();
                while (( i = str.toLowerCase().indexOf( token, i >= 0 ? i + newToken.length : 0 )) !== -1) {
                    str = str.substring(0, i) + newToken + str.substring(i + token.length);
                }
            } else {
                return this.split(token).join(newToken);
            }
        }
        return (str);
    };

    function apply_ner_titles() {
        $("span.B_NAME, span.I_NAME, span.NAME").attr("title", "Individuals");
        $("span.B_ORG, span.I_ORG, span.ORG").attr("title", "Entities");
        $("span.B_GEO, span.I_GEO, span.GEO").attr("title", "Geographic features");
        $("span.B_ENTR, span.I_ENTR, span.ENTR").attr("title", "Events/Developments");
        $("span.B_PROD, span.I_PROD, span.PROD").attr("title", "Trademarks/Products");

        $("span.O").attr("title", "O  - !!!!!!!");
        $("span.__UNDEFINED__").attr("title", "__UNDEFINED__ - !!!!!!!");
        $("span.__UNKNOWN__").attr("title", "__UNKNOWN__ - !!!!!!!!");
    };

    var processingTickCount = 1;
    function processing_tick() {
        var n2 = function (n) {
            n = n.toString();
            return ((n.length == 1) ? ('0' + n) : n);
        }
        var d = new Date(new Date(new Date(new Date().setHours(0)).setMinutes(0)).setSeconds(processingTickCount));
        var t = n2(d.getHours()) + ':' + n2(d.getMinutes()) + ':' + n2(d.getSeconds()); //d.toLocaleTimeString();
        var $s = $('#processingTickLabel');
        if ($s.length) {
            $s.text(t);
            processingTickCount++;
            setTimeout(processing_tick, 1000);
        } else {
            processingTickCount = 1;
        }
    }
});